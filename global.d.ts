declare var System: {
  import: ( filename: string ) => Promise< any >
}

declare interface Window {
  __INITIAL_STATE__: any
}

declare interface AsyncDataComponent {
  asyncData: ( arg: any ) => any
}