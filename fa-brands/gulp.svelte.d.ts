/** @typedef {typeof __propDef.props}  GulpProps */
/** @typedef {typeof __propDef.events}  GulpEvents */
/** @typedef {typeof __propDef.slots}  GulpSlots */
export default class Gulp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GulpProps = typeof __propDef.props
export type GulpEvents = typeof __propDef.events
export type GulpSlots = typeof __propDef.slots
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
