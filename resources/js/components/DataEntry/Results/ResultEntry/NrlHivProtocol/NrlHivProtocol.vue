<template>
    <div>
        <b-card no-body>
            <b-tabs vertical card pills small>
                <b-tab title="FUJIREBIO DIAGNOSTICS, INC. SERODIA HIV 1/2">
                    <fujirebio />
                </b-tab>
                <b-tab title="ABBOTT ARCHITECT HIV Ag/Ab i2000 SR">
                    <abbott />
                </b-tab>
                <b-tab title="BIORAD GENSCREEN ULTRA HIV Ag/Ab">
                    <genscreen />
                </b-tab>
                <b-tab title="BIORAD GEENIUS">
                    <geenius />
                </b-tab>
                <b-tab title="ROCHE TAQSCREEN">
                    <roche-taqscreen />
                </b-tab>
                <b-tab title="MP BLOT HIV 2.0">
                    <mp-blot />
                </b-tab>
                <b-tab title="QIAGEN ARTUS HIV-1">
                    <qiagen-artus />
                </b-tab>
            </b-tabs>
        </b-card>
        <test-protocol-footer class="mt-3"></test-protocol-footer>
        <b-modal id="eia-settings" header-bg-variant="dark" header-text-variant="white" title="EIA Results" hide-footer>
            <eia-results />
        </b-modal>
        <b-modal id="pcr-settings" header-bg-variant="dark" header-text-variant="white" title="PCR Results" hide-footer>
            <pcr-results />
        </b-modal>
    </div>
</template>

<script>
import Fujirebio from './Fujirebio/Fujurebio'
import Abbott from './Abbott/Abbott'
import Genscreen from './Biorad/Genscreen'
import Geenius from './Biorad/Geenius'
import RocheTaqscreen from './Roche/RocheTaqscreen'
import MpBlot from './MpBlot/MpBlot'
import QiagenArtus from './Qiagen/QiagenArtus'
import TestProtocolFooter from '../TestProtocolFooter'
import EiaResults from '../../../../Administration/References/EiaResults'
import PcrResults from '../../../../Administration/References/PcrResults'
export default {
    components : {Fujirebio,Abbott,Genscreen,Geenius,RocheTaqscreen,MpBlot,QiagenArtus,TestProtocolFooter,EiaResults,PcrResults},
}
</script>
