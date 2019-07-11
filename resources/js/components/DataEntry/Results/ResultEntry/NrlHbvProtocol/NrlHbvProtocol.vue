<template>
    <div>
        <b-card no-body>
            <b-tabs vertical card pills small>
                <b-tab title="BIORAD MONOLISA HBSAG QUALI">
                    <monolisa />
                </b-tab>
                <b-tab title="DIASORIN MUREX HBSAG QUALI">
                    <murex />
                </b-tab>
                <b-tab title="ABBOTT ARCHITECT HBSAG QUALI">
                    <architect />
                </b-tab>
                <b-tab title="ROCHE TAQSCREEN">
                    <roche-taqscreen />
                </b-tab>
                <b-tab title="QIAGEN ARTUS HBV">
                    <artus />
                </b-tab>
                <b-tab title="BIORAD MONOLISA HBSAG NT">
                    
                </b-tab>
            </b-tabs>
        </b-card>
        <b-modal id="eia-settings" header-bg-variant="dark" header-text-variant="white" title="EIA Results" hide-footer>
            <eia-results />
        </b-modal>
    </div>
</template>
<script>
import EiaResults from '../../../../Administration/References/EiaResults'
import Monolisa from './Biorad/Monolisa'
import Murex from './Diasorin/Murex'
import Architect from './Abbott/Architect'
import RocheTaqscreen from './Roche/RocheTaqscreen'
import Artus from './Qiagen/Artus'
export default {
    components : {EiaResults,Monolisa,Murex,Architect,RocheTaqscreen,Artus}
}
</script>

