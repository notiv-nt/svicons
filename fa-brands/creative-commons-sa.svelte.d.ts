/** @typedef {typeof __propDef.props}  CreativeCommonsSaProps */
/** @typedef {typeof __propDef.events}  CreativeCommonsSaEvents */
/** @typedef {typeof __propDef.slots}  CreativeCommonsSaSlots */
export default class CreativeCommonsSa extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CreativeCommonsSaProps = typeof __propDef.props
export type CreativeCommonsSaEvents = typeof __propDef.events
export type CreativeCommonsSaSlots = typeof __propDef.slots
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
