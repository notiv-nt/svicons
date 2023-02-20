/** @typedef {typeof __propDef.props}  OpenidProps */
/** @typedef {typeof __propDef.events}  OpenidEvents */
/** @typedef {typeof __propDef.slots}  OpenidSlots */
export default class Openid extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type OpenidProps = typeof __propDef.props
export type OpenidEvents = typeof __propDef.events
export type OpenidSlots = typeof __propDef.slots
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
