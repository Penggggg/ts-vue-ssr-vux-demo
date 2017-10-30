import 'reflect-metadata';
import * as Koa from 'koa';
import * as path from 'path';
import * as KoaLog from 'koa-logs-full';
import * as KoaServer from 'koa-static2';
import controllers from './controller';
import { ioc } from './inversify.config';
import { useKoaServer, useContainer } from 'routing-controllers';

const app = new Koa( );

app
  .use( KoaServer( 'static', __dirname + '/static'))
  .use( KoaLog( app , {
    logdir: path.join( __dirname, 'logs')
  }));

useContainer( ioc );
useKoaServer( app, {
  controllers
});

app.listen( 9090 );
console.log('running in 9090');