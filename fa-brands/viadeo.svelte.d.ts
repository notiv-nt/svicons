/** @typedef {typeof __propDef.props}  ViadeoProps */
/** @typedef {typeof __propDef.events}  ViadeoEvents */
/** @typedef {typeof __propDef.slots}  ViadeoSlots */
export default class Viadeo extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ViadeoProps = typeof __propDef.props
export type ViadeoEvents = typeof __propDef.events
export type ViadeoSlots = typeof __propDef.slots
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
