/** @typedef {typeof __propDef.props}  BandcampProps */
/** @typedef {typeof __propDef.events}  BandcampEvents */
/** @typedef {typeof __propDef.slots}  BandcampSlots */
export default class Bandcamp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BandcampProps = typeof __propDef.props
export type BandcampEvents = typeof __propDef.events
export type BandcampSlots = typeof __propDef.slots
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
