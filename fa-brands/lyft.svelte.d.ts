/** @typedef {typeof __propDef.props}  LyftProps */
/** @typedef {typeof __propDef.events}  LyftEvents */
/** @typedef {typeof __propDef.slots}  LyftSlots */
export default class Lyft extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LyftProps = typeof __propDef.props
export type LyftEvents = typeof __propDef.events
export type LyftSlots = typeof __propDef.slots
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
