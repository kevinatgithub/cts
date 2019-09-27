import BsfTestKit from '../BsfTestKit'

export default class Bsf{
    constructor({machine,bsf_mt,hiv_license,kits}){
        this.machine = machine ? machine : null
        this.bsf_mt = bsf_mt ? bsf_mt : null
        this.hiv_license = hiv_license ? hiv_license : null
        this.kits =  kits ? kits : [
            new BsfTestKit({id:0}),
            new BsfTestKit({id:1}),
            new BsfTestKit({id:2}),
        ]
    }
}