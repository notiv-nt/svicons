/** @typedef {typeof __propDef.props}  StravaProps */
/** @typedef {typeof __propDef.events}  StravaEvents */
/** @typedef {typeof __propDef.slots}  StravaSlots */
export default class Strava extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StravaProps = typeof __propDef.props
export type StravaEvents = typeof __propDef.events
export type StravaSlots = typeof __propDef.slots
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
