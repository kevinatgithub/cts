<template>
    <div>
        <b-card no-body>
            <b-tabs vertical card pills small>
                <b-tab title="FUJIREBIO DIAGNOSTICS, INC. SERODIA HIV 1/2">
                    <fujirebio />
                </b-tab>
                <b-tab title="ABBOTT ARCHITECT HIV Ag/Ab i2000 SR">

                </b-tab>
                <b-tab title="BIORAD GENSCREEN ULTRA HIV Ag/Ab">
                    
                </b-tab>
                <b-tab title="BIORAD GEENIUS">

                </b-tab>
                <b-tab title="ROCHE TAQSCREEN">

                </b-tab>
                <b-tab title="MP BLOT HIV 2.0">

                </b-tab>
                <b-tab title="QIAGEN ARTUS HIV-1">

                </b-tab>
            </b-tabs>
        </b-card>
        <test-protocol-footer class="mt-3"></test-protocol-footer>
    </div>
</template>

<script>
import Fujirebio from './Fujirebio/Fujurebio'
import TestProtocolFooter from '../TestProtocolFooter'
export default {
    components : {Fujirebio,TestProtocolFooter},
}
</script>
