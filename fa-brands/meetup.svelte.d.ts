/** @typedef {typeof __propDef.props}  MeetupProps */
/** @typedef {typeof __propDef.events}  MeetupEvents */
/** @typedef {typeof __propDef.slots}  MeetupSlots */
export default class Meetup extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MeetupProps = typeof __propDef.props
export type MeetupEvents = typeof __propDef.events
export type MeetupSlots = typeof __propDef.slots
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
