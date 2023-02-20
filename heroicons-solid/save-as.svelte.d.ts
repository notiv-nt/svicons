/** @typedef {typeof __propDef.props}  SaveAsProps */
/** @typedef {typeof __propDef.events}  SaveAsEvents */
/** @typedef {typeof __propDef.slots}  SaveAsSlots */
export default class SaveAs extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SaveAsProps = typeof __propDef.props
export type SaveAsEvents = typeof __propDef.events
export type SaveAsSlots = typeof __propDef.slots
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
