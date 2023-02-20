/** @typedef {typeof __propDef.props}  UikitProps */
/** @typedef {typeof __propDef.events}  UikitEvents */
/** @typedef {typeof __propDef.slots}  UikitSlots */
export default class Uikit extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UikitProps = typeof __propDef.props
export type UikitEvents = typeof __propDef.events
export type UikitSlots = typeof __propDef.slots
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
