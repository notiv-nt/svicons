/** @typedef {typeof __propDef.props}  BitbucketProps */
/** @typedef {typeof __propDef.events}  BitbucketEvents */
/** @typedef {typeof __propDef.slots}  BitbucketSlots */
export default class Bitbucket extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BitbucketProps = typeof __propDef.props
export type BitbucketEvents = typeof __propDef.events
export type BitbucketSlots = typeof __propDef.slots
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
