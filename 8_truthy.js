const { convertCompilerOptionsFromJson } = require("typescript");

if("" == [])
{
    console.log('This is true')
}

if("0" == 0)
{
    console.log('This is also true')
}

if("0" === 0)
{
    console.log('What about this')
}