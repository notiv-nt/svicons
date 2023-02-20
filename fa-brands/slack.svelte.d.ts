/** @typedef {typeof __propDef.props}  SlackProps */
/** @typedef {typeof __propDef.events}  SlackEvents */
/** @typedef {typeof __propDef.slots}  SlackSlots */
export default class Slack extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SlackProps = typeof __propDef.props
export type SlackEvents = typeof __propDef.events
export type SlackSlots = typeof __propDef.slots
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
