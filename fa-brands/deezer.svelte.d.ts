/** @typedef {typeof __propDef.props}  DeezerProps */
/** @typedef {typeof __propDef.events}  DeezerEvents */
/** @typedef {typeof __propDef.slots}  DeezerSlots */
export default class Deezer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DeezerProps = typeof __propDef.props
export type DeezerEvents = typeof __propDef.events
export type DeezerSlots = typeof __propDef.slots
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
