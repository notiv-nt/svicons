/** @typedef {typeof __propDef.props}  DiscordProps */
/** @typedef {typeof __propDef.events}  DiscordEvents */
/** @typedef {typeof __propDef.slots}  DiscordSlots */
export default class Discord extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DiscordProps = typeof __propDef.props
export type DiscordEvents = typeof __propDef.events
export type DiscordSlots = typeof __propDef.slots
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
