/** @typedef {typeof __propDef.props}  YarnProps */
/** @typedef {typeof __propDef.events}  YarnEvents */
/** @typedef {typeof __propDef.slots}  YarnSlots */
export default class Yarn extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YarnProps = typeof __propDef.props
export type YarnEvents = typeof __propDef.events
export type YarnSlots = typeof __propDef.slots
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
