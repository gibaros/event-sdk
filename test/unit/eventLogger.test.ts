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

 - Ramiro González Maciel <ramiro@modusbox.com>

 --------------
 ******/

'use strict'

const Test = require('tapes')(require('tape'))
import { EventLogger } from "../../src/eventLogger"
import { MessageType,
    EnEventType,
    EnEventTypeAction,
    EnEventStatus,
   } from "../../src/model/MessageType"

Test('EventLogger Class Test', (eventLoggerTests: any) => {

    eventLoggerTests.test('messageType', (messageTypeTest: any) => {
        messageTypeTest.test('should create a MessageType', async (test: any) => {
            try {
                const event : MessageType = {
                    from: "noresponsepayeefsp",
                    to: "payerfsp",
                    id: "aa398930-f210-4dcd-8af0-7c769cea1660",
                    content: {
                        headers: {
                            "content-type": "application/vnd.interoperability.transfers+json;version=1.0",
                            date: "2019-05-28T16:34:41.000Z",
                            "fspiop-source": "noresponsepayeefsp",
                            "fspiop-destination": "payerfsp"
                        },
                        payload: "data:application/vnd.interoperability.transfers+json;version=1.0;base64,ewogICJmdWxmaWxtZW50IjogIlVObEo5OGhaVFlfZHN3MGNBcXc0aV9VTjN2NHV0dDdDWkZCNHlmTGJWRkEiLAogICJjb21wbGV0ZWRUaW1lc3RhbXAiOiAiMjAxOS0wNS0yOVQyMzoxODozMi44NTZaIiwKICAidHJhbnNmZXJTdGF0ZSI6ICJDT01NSVRURUQiCn0"
                    },
                    type: "application/json",
                    metadata: {
                        event: {
                            id: "3920382d-f78c-4023-adf9-0d7a4a2a3a2f",
                            type: EnEventType.log,
                            action: EnEventTypeAction.start,
                            createdAt: "2019-05-29T23:18:32.935Z",
                            state: {
                                status: EnEventStatus.success,
                                code: 0,
                                description: "action successful"
                            },
                            responseTo: "1a396c07-47ab-4d68-a7a0-7a1ea36f0012"
                        },
                        trace: {
                            service: "central-ledger-prepare-handler",
                            traceId: "bbd7b2c7-3978-408e-ae2e-a13012c47739",
                            parentSpanId: "4e3ce424-d611-417b-a7b3-44ba9bbc5840",
                            spanId: "efeb5c22-689b-4d04-ac5a-2aa9cd0a7e87"
                        }
                    }
                }
                console.log(event);
                test.equal(event.content.headers.date, "2019-05-28T16:34:41.000Z", 'OK!')
                test.equal(event.metadata!.event.state.code, 0, 'OK!')

                test.end()
            } catch (e) {
                test.fail(`Error Thrown - ${e}`)
                test.end()
            }
        })
        messageTypeTest.end()
    })

    eventLoggerTests.test('log', (logTest: any) => {
        logTest.test('should console log a simple event', async (test: any) => {
            try {
                const eventLogger: EventLogger = new EventLogger()
                eventLogger.log("dfsp1", "some_unique_id_here", {version: 1}, { hello: 'world'});
                test.equal(true, true, 'OK!')
                test.end()
            } catch (e) {
                test.fail(`Error Thrown - ${e}`)
                test.end()
            }
        })
        logTest.end()
    })
    eventLoggerTests.end()
})