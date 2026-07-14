/** @param {$TagKubeEvent} e  */
function itemTags_SimpleTMs(e) {
    e.add('kubejs:tms', /simpletms:tm_.*/)
    e.add('kubejs:trs', /simpletms:tr_.*/)
}