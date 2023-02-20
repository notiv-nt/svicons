/** @typedef {typeof __propDef.props}  GuildedProps */
/** @typedef {typeof __propDef.events}  GuildedEvents */
/** @typedef {typeof __propDef.slots}  GuildedSlots */
export default class Guilded extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GuildedProps = typeof __propDef.props
export type GuildedEvents = typeof __propDef.events
export type GuildedSlots = typeof __propDef.slots
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
