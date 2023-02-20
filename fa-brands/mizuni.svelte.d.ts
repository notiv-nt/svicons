/** @typedef {typeof __propDef.props}  MizuniProps */
/** @typedef {typeof __propDef.events}  MizuniEvents */
/** @typedef {typeof __propDef.slots}  MizuniSlots */
export default class Mizuni extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MizuniProps = typeof __propDef.props
export type MizuniEvents = typeof __propDef.events
export type MizuniSlots = typeof __propDef.slots
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
