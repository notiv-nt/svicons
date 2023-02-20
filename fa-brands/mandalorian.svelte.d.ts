/** @typedef {typeof __propDef.props}  MandalorianProps */
/** @typedef {typeof __propDef.events}  MandalorianEvents */
/** @typedef {typeof __propDef.slots}  MandalorianSlots */
export default class Mandalorian extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MandalorianProps = typeof __propDef.props
export type MandalorianEvents = typeof __propDef.events
export type MandalorianSlots = typeof __propDef.slots
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
