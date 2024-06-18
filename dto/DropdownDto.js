const { IsString } = require('class-validator')
const { Expose } = require('class-transformer')

class DropdownDto {

  @IsString
  @Expose({name:'id'})
  id

  @IsString
  @Expose({name:'name'})
  name
}

module.exports = DropdownDto