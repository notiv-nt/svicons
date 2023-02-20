/** @typedef {typeof __propDef.props}  SaveProps */
/** @typedef {typeof __propDef.events}  SaveEvents */
/** @typedef {typeof __propDef.slots}  SaveSlots */
export default class Save extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SaveProps = typeof __propDef.props
export type SaveEvents = typeof __propDef.events
export type SaveSlots = typeof __propDef.slots
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
