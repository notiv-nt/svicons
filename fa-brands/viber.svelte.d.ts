/** @typedef {typeof __propDef.props}  ViberProps */
/** @typedef {typeof __propDef.events}  ViberEvents */
/** @typedef {typeof __propDef.slots}  ViberSlots */
export default class Viber extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ViberProps = typeof __propDef.props
export type ViberEvents = typeof __propDef.events
export type ViberSlots = typeof __propDef.slots
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
