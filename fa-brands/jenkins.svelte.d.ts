/** @typedef {typeof __propDef.props}  JenkinsProps */
/** @typedef {typeof __propDef.events}  JenkinsEvents */
/** @typedef {typeof __propDef.slots}  JenkinsSlots */
export default class Jenkins extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JenkinsProps = typeof __propDef.props
export type JenkinsEvents = typeof __propDef.events
export type JenkinsSlots = typeof __propDef.slots
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
