/** @typedef {typeof __propDef.props}  ReplydProps */
/** @typedef {typeof __propDef.events}  ReplydEvents */
/** @typedef {typeof __propDef.slots}  ReplydSlots */
export default class Replyd extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type ReplydProps = typeof __propDef.props
export type ReplydEvents = typeof __propDef.events
export type ReplydSlots = typeof __propDef.slots
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
