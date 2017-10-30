import * as LRU from 'lru-cache';
import { injectable } from 'inversify';

@injectable( )
export class Cache {

  private pagePrefix = 'page';
  private pageCache: LRU.Cache< any, any >;

  private pageOptions = {
    maxAge: 24 * 60 * 60 * 1000
  };

  constructor( ) {
    this.pageCache = LRU( this.pageOptions );
  }

  public getPage = ( key: string ) => {
    console.log(`>>>>> Getting pageCache ${key} <<<<<`);
    return this.pageCache.get(`${this.pagePrefix}-${key}`);
  }

  public setPage = ( key: string, value: string, maxAge?: number ) => {
    console.log(`>>>>> Setting pageCache ${key} <<<<<`);
    this.pageCache.set( `${this.pagePrefix}-${key}`, value, maxAge );
  }

}