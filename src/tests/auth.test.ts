import { IncomingHttpHeaders } from 'http'
import { getAPIKey } from '../api/auth.js'
import { describe, expect, test } from 'vitest'


describe('auth test', () => {
  test("get valid authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: 'ApiKey token'
    }
    expect(getAPIKey(headers)).toBe("token")
  })

  test("empty auth header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: ''
    }
    expect(getAPIKey(headers)).toBeNull()
  })

  test("auth header with Bearer <token>", () => {
    const headers: IncomingHttpHeaders = {
      authorization: 'Bearer token'
    }
    expect(getAPIKey(headers)).toBeNull()
  })
})