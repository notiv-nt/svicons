/** @typedef {typeof __propDef.props}  SupportProps */
/** @typedef {typeof __propDef.events}  SupportEvents */
/** @typedef {typeof __propDef.slots}  SupportSlots */
export default class Support extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SupportProps = typeof __propDef.props
export type SupportEvents = typeof __propDef.events
export type SupportSlots = typeof __propDef.slots
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
