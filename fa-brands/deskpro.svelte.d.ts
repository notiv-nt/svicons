/** @typedef {typeof __propDef.props}  DeskproProps */
/** @typedef {typeof __propDef.events}  DeskproEvents */
/** @typedef {typeof __propDef.slots}  DeskproSlots */
export default class Deskpro extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DeskproProps = typeof __propDef.props
export type DeskproEvents = typeof __propDef.events
export type DeskproSlots = typeof __propDef.slots
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
