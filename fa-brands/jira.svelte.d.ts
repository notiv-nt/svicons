/** @typedef {typeof __propDef.props}  JiraProps */
/** @typedef {typeof __propDef.events}  JiraEvents */
/** @typedef {typeof __propDef.slots}  JiraSlots */
export default class Jira extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JiraProps = typeof __propDef.props
export type JiraEvents = typeof __propDef.events
export type JiraSlots = typeof __propDef.slots
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
