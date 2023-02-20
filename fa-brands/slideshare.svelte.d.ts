/** @typedef {typeof __propDef.props}  SlideshareProps */
/** @typedef {typeof __propDef.events}  SlideshareEvents */
/** @typedef {typeof __propDef.slots}  SlideshareSlots */
export default class Slideshare extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SlideshareProps = typeof __propDef.props
export type SlideshareEvents = typeof __propDef.events
export type SlideshareSlots = typeof __propDef.slots
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
