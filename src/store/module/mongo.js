// import { AsyncStorage } from "react-native";
import moment from 'moment'

let DbConnect = function () {
  // Type 3: Persistent datastore with automatic loading
  let Datastore = require('react-native-local-mongodb')
  let db = new Datastore({ filename: 'asyncStorageKey2', autoload: true })
  return db
}
export default {
  namespaced: true,
  state: {
    auth: false
  },
  mutations: {
    setAuth (state, data) {
      // mutate state
      state.auth = data
    }
  },
  actions: {
    InsertData ({ commit }, data) {
      let db = DbConnect()
      return new Promise((resolve, reject) => {
        db.insert(data, function (err, newDoc) {
          if (err) {
            let errMsg = {
              error: 1,
              msg: String(err)
            }
            reject(errMsg)
          } else {
            resolve({
              error: 0,
              msg: 'success insert'
            })
          }
        })
      })
    },
    // Find all documents in the collection
    FindData ({ commit }, data) {
      let db = DbConnect()
      return new Promise((resolve, reject) => {
        db.find({}, function (err, docs) {
          if (err) {
            let errMsg = {
              error: 1,
              msg: String(err)
            }
            reject(errMsg)
          } else {
            resolve({
              error: 0,
              msg: 'success find data',
              payload: docs
            })
          }
        })
      })
    }
  },
  getters: {}
}
