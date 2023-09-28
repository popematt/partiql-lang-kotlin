/*
 * Copyright Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at:
 *
 *       http://aws.amazon.com/apache2.0/
 *
 *  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 *  language governing permissions and limitations under the License.
 */

package org.partiql.planner.test.plugin

import com.amazon.ionelement.api.StructElement
import org.partiql.spi.BindingPath
import org.partiql.spi.connector.Connector
import org.partiql.spi.connector.ConnectorMetadata
import org.partiql.spi.connector.ConnectorObject
import org.partiql.spi.connector.ConnectorObjectHandle
import org.partiql.spi.connector.ConnectorObjectPath
import org.partiql.spi.connector.ConnectorSession
import org.partiql.types.StaticType
import java.nio.file.Path
import kotlin.io.path.notExists

/**
 * Associate a resolved path with a [StaticType]
 *
 * @property path
 * @property type
 */
class FsObject(
    public val path: List<String>,
    public val type: StaticType,
) : ConnectorObject {
    public fun getDescriptor(): StaticType = type
}

/**
 * PlannerConnector
 *
 * @property catalogRoot    Catalog root path
 * @property catalogName    Catalog name
 * @property config         Catalog configuration
 */
class FsConnector(
    private val catalogRoot: Path,
    private val catalogName: String,
    private val config: StructElement,
) : Connector {

    private val metadata = Metadata(catalogRoot)

    // not yet defined in SPI
    public fun listObjects(): List<BindingPath> = metadata.listObjects()

    override fun getMetadata(session: ConnectorSession): ConnectorMetadata = metadata

    class Factory(private val root: Path) : Connector.Factory {

        override fun getName(): String = "fs"

        override fun create(catalogName: String, config: StructElement): Connector {
            val catalogRoot = root.resolve(catalogName).toAbsolutePath()
            if (catalogRoot.notExists()) {
                error("Invalid catalog `$catalogRoot`")
            }
            return FsConnector(catalogRoot, catalogName, config)
        }
    }

    class Metadata(root: Path) : ConnectorMetadata {

        private val catalog = FsCatalog.load(root)

        override fun getObjectType(session: ConnectorSession, handle: ConnectorObjectHandle): StaticType {
            val obj = handle.value as FsObject
            return obj.getDescriptor()
        }

        override fun getObjectHandle(session: ConnectorSession, path: BindingPath): ConnectorObjectHandle? {
            val value = catalog.lookup(path) ?: return null
            return ConnectorObjectHandle(
                absolutePath = ConnectorObjectPath(value.path),
                value = value,
            )
        }

        internal fun listObjects(): List<BindingPath> = catalog.listObjects()
    }
}
