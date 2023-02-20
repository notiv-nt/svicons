/** @typedef {typeof __propDef.props}  GooglePlusProps */
/** @typedef {typeof __propDef.events}  GooglePlusEvents */
/** @typedef {typeof __propDef.slots}  GooglePlusSlots */
export default class GooglePlus extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GooglePlusProps = typeof __propDef.props
export type GooglePlusEvents = typeof __propDef.events
export type GooglePlusSlots = typeof __propDef.slots
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
