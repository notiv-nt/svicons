/** @typedef {typeof __propDef.props}  InstagramProps */
/** @typedef {typeof __propDef.events}  InstagramEvents */
/** @typedef {typeof __propDef.slots}  InstagramSlots */
export default class Instagram extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type InstagramProps = typeof __propDef.props
export type InstagramEvents = typeof __propDef.events
export type InstagramSlots = typeof __propDef.slots
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
