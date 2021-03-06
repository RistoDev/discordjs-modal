const TextInput = require(`./TextInput`)

/**
 * Create your Modal
 * @example
 * //Create Modal using object
 * new Modal({
 *  title: "Personal information"
 *  custom_id: "poll",
 *  components: [new TextInput(), new TextInput()]
 * })
 * @example
 * //Create Modal using methods
 * new Modal()
 * .setTitle("Report user")
 * .setCustomId("reportUser")
 * .addComponents(new TextInput(), new TextInput())
 */

class Modal {

  /**
   * You can pass the properties in an object to be read in the constructor or use the methods to set the modal
   * @typedef {Object} data
   * @property {string} title The title of the popup modal
   * @property {string} custom_id A developer-defined identifier for the component, max 100 characters
   * @property {TextInput[]} components Between 1 and 5 (inclusive) components that make up the modal
   */

  /**
   * These are the constructor options:
   * * `title` - string
   * * `custom_id` - string
   * * `components` - TextInputs[ ]
   * @param {data} [data={}]
   */

  constructor(data = {}){
    this.setup(data)
  }

  /**
   * @param {data} data
   */

  setup(data) {
   this.type = 5
    this.title = data.title ?? null
    this.custom_id = data.custom_id ?? null
    this.components = []
    if(data.components) {
      data.components.forEach(component => {
       console.log(new TextInput(component).toJSON())
       this.components.push(new TextInput(component).toJSON())
      })
    }
  }

  setTitle(title){
    if(typeof title != "string") throw new Error(`The type must be a string`)
    this.title = title
    return this
  }

  setCustomId(custom_id){
    if(custom_id.length > 100) throw new Error(`You exceeded the maximum number of characters. Maximum characters: 100`)
    this.custom_id = custom_id
    return this
  }

  addComponents(...components){
    let arr = []
    let componentsArr = [...components]
    componentsArr.forEach(x => arr.push(x.toJSON()))
    this.components = arr
    return this
  }

  toJSON() {
    return this
  }
}

module.exports = Modal