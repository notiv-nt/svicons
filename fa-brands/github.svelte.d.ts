/** @typedef {typeof __propDef.props}  GithubProps */
/** @typedef {typeof __propDef.events}  GithubEvents */
/** @typedef {typeof __propDef.slots}  GithubSlots */
export default class Github extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GithubProps = typeof __propDef.props
export type GithubEvents = typeof __propDef.events
export type GithubSlots = typeof __propDef.slots
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
