import 'reflect-metadata';
import * as fs from 'fs';
import * as Koa from 'koa';
import * as path from 'path';
import { injectable, inject } from 'inversify';
import { Cache } from '../../services/cache';
import { createBundleRenderer } from 'vue-server-renderer';
import { Controller, Get, Ctx, HeaderParams } from 'routing-controllers';

const DEBUG = process.env.NODE_ENV === 'development';
const serverBundle = require('../../static/server/js/vue-ssr-server-bundle.json');

@Controller('/')
@injectable( )
export class PageCtrl {

  private cache: Cache;
  constructor(
    @inject( Cache ) Cache$: Cache ) {
      this.cache = Cache$;
  }

  @Get('*')
  async indexPage2(
    @Ctx( ) ctx: Koa.Context, @HeaderParams( ) headers ) {

    /** Stataic Files Server */
    if ( ctx.url.indexOf('/static/') === 0 ) {

      const url = path.join( __dirname, `../../${ctx.url}` );
      const existed = fs.existsSync( url );

      if ( !existed ) {
        return ctx.status = 404;
      }

      const ims = headers['if-modified-since'];
      const state = fs.statSync( url );
      const { mtime } = state;
      const serverFsTime = ( new Date( mtime )).getTime( );
      const clientFsTime = ( new Date( ims )).getTime( );

      if ( serverFsTime <= clientFsTime ) {
        return ctx.status = 304;
      } else {
        const data = fs.readFileSync( url, 'utf8' );
        return data;
      }

      /** ssr */
    } else {

      let result;
      const cachePage = this.cache.getPage( ctx.url );

      /** ssr cache */
      if ( !cachePage ) {

        const ssrString = await this.ssr( ctx.url );

        if ( !ssrString ) {
          return ctx.status = 404;
        }
        result = ssrString;
        this.cache.setPage( ctx.url, ssrString );

      } else {

        result = cachePage;

      }

      ctx.set('Content-Type', 'text/html; charset=utf-8');
      return result;

    }
  }

  private ssr = async ( url: string ): Promise<any> => new Promise( resolve => {

    const result = '';
    const renderer = createBundleRenderer( serverBundle, {
      template: fs.readFileSync( path.join( __dirname,
        DEBUG ?
          './index.template.dev.html' :
          './index.template.pro.html'
        ) , 'utf-8')
    });

    renderer.renderToString({ url }, ( err, html ) => {
        resolve( html );
    });

  })

}
