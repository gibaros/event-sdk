/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>

 * Crosslake
 - Lewis Daly <lewisd@crosslaketech.com>

 --------------
 ******/

'use strict'

import { EventType, TypeEventTypeAction } from "model/EventMessage"

/**
 * @function eventAsyncOverrides
 * @description Given a list of comma separated strings, build a map containing the strings, 
 *   and a boolean 'true'. 
 * 
 *   We use this dict in a lookup to determine which EventTypes to override the async for
 * @param asyncOverridesString { string } - A comma separated list of strings. Defaults to an empty string.
 * 
 * @returns overrideDict
 */
function eventAsyncOverrides(asyncOverridesString: string = ''): { [index: string]: boolean} {
  const overrideDict: { [index: string]: boolean } = {}
  asyncOverridesString.split(',').map(val => overrideDict[val] = true)

  return overrideDict
}


/**
 * @function shouldOverrideEvent
 * 
 * @description Given an override dict and EventType, returns whether or not we should override
 *   the await for a given event.
 * 
 * @param overrideDict 
 * @param eventType 
 * 
 * @returns boolean
 */
function shouldOverrideEvent(overrideDict: { [index: string]: boolean }, eventType: TypeEventTypeAction['type']): boolean {
  if (overrideDict[eventType]) {
    return true
  }

  return false
}

export default {
  eventAsyncOverrides,
  shouldOverrideEvent
}