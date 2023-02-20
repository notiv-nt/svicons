/** @typedef {typeof __propDef.props}  UnsplashProps */
/** @typedef {typeof __propDef.events}  UnsplashEvents */
/** @typedef {typeof __propDef.slots}  UnsplashSlots */
export default class Unsplash extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UnsplashProps = typeof __propDef.props
export type UnsplashEvents = typeof __propDef.events
export type UnsplashSlots = typeof __propDef.slots
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
