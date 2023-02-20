/** @typedef {typeof __propDef.props}  MastodonProps */
/** @typedef {typeof __propDef.events}  MastodonEvents */
/** @typedef {typeof __propDef.slots}  MastodonSlots */
export default class Mastodon extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MastodonProps = typeof __propDef.props
export type MastodonEvents = typeof __propDef.events
export type MastodonSlots = typeof __propDef.slots
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
