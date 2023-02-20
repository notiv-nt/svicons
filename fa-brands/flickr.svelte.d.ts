/** @typedef {typeof __propDef.props}  FlickrProps */
/** @typedef {typeof __propDef.events}  FlickrEvents */
/** @typedef {typeof __propDef.slots}  FlickrSlots */
export default class Flickr extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FlickrProps = typeof __propDef.props
export type FlickrEvents = typeof __propDef.events
export type FlickrSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
