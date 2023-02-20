/** @typedef {typeof __propDef.props}  SkyatlasProps */
/** @typedef {typeof __propDef.events}  SkyatlasEvents */
/** @typedef {typeof __propDef.slots}  SkyatlasSlots */
export default class Skyatlas extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SkyatlasProps = typeof __propDef.props
export type SkyatlasEvents = typeof __propDef.events
export type SkyatlasSlots = typeof __propDef.slots
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
