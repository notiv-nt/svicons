/** @typedef {typeof __propDef.props}  GitProps */
/** @typedef {typeof __propDef.events}  GitEvents */
/** @typedef {typeof __propDef.slots}  GitSlots */
export default class Git extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GitProps = typeof __propDef.props
export type GitEvents = typeof __propDef.events
export type GitSlots = typeof __propDef.slots
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
