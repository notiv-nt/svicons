/** @typedef {typeof __propDef.props}  CogProps */
/** @typedef {typeof __propDef.events}  CogEvents */
/** @typedef {typeof __propDef.slots}  CogSlots */
export default class Cog extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type CogProps = typeof __propDef.props
export type CogEvents = typeof __propDef.events
export type CogSlots = typeof __propDef.slots
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
