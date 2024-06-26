package org.partiql.parser.internal

import org.junit.jupiter.api.extension.ExtensionContext
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.ArgumentsProvider
import org.junit.jupiter.params.provider.ArgumentsSource
import org.partiql.ast.AstNode
import org.partiql.ast.Identifier
import org.partiql.ast.identifierQualified
import org.partiql.ast.identifierSymbol
import org.partiql.ast.statementDDLCreateTable
import org.partiql.ast.statementDDLDropTable
import java.util.stream.Stream
import kotlin.test.assertEquals

class PartiQLParserDDLTests {

    private val parser = PartiQLParserDefault()

    data class SuccessTestCase(
        val description: String? = null,
        val query: String,
        val node: AstNode
    )

    @ArgumentsSource(TestProvider::class)
    @ParameterizedTest
    fun errorTests(tc: SuccessTestCase) = assertExpression(tc.query, tc.node)

    class TestProvider : ArgumentsProvider {
        val createTableTests = listOf(
            SuccessTestCase(
                "CREATE TABLE with unqualified case insensitive name",
                "CREATE TABLE foo",
                statementDDLCreateTable(
                    identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                    null
                )
            ),
            // Support Case Sensitive identifier as table name
            // Subsequent process may need to change
            // See: https://www.db-fiddle.com/f/9A8mknSNYuRGLfkqkLeiHD/0 for reference.
            SuccessTestCase(
                "CREATE TABLE with unqualified case sensitive name",
                "CREATE TABLE \"foo\"",
                statementDDLCreateTable(
                    identifierSymbol("foo", Identifier.CaseSensitivity.SENSITIVE),
                    null
                )
            ),
            SuccessTestCase(
                "CREATE TABLE with qualified case insensitive name",
                "CREATE TABLE myCatalog.mySchema.foo",
                statementDDLCreateTable(
                    identifierQualified(
                        identifierSymbol("myCatalog", Identifier.CaseSensitivity.INSENSITIVE),
                        listOf(
                            identifierSymbol("mySchema", Identifier.CaseSensitivity.INSENSITIVE),
                            identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                        )
                    ),
                    null
                )
            ),
            SuccessTestCase(
                "CREATE TABLE with qualified name with mixed case sensitivity",
                "CREATE TABLE myCatalog.\"mySchema\".foo",
                statementDDLCreateTable(
                    identifierQualified(
                        identifierSymbol("myCatalog", Identifier.CaseSensitivity.INSENSITIVE),
                        listOf(
                            identifierSymbol("mySchema", Identifier.CaseSensitivity.SENSITIVE),
                            identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                        )
                    ),
                    null
                )
            ),
        )

        val dropTableTests = listOf(
            SuccessTestCase(
                "DROP TABLE with unqualified case insensitive name",
                "DROP TABLE foo",
                statementDDLDropTable(
                    identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                )
            ),
            SuccessTestCase(
                "DROP TABLE with unqualified case sensitive name",
                "DROP TABLE \"foo\"",
                statementDDLDropTable(
                    identifierSymbol("foo", Identifier.CaseSensitivity.SENSITIVE),
                )
            ),
            SuccessTestCase(
                "DROP TABLE with qualified case insensitive name",
                "DROP TABLE myCatalog.mySchema.foo",
                statementDDLDropTable(
                    identifierQualified(
                        identifierSymbol("myCatalog", Identifier.CaseSensitivity.INSENSITIVE),
                        listOf(
                            identifierSymbol("mySchema", Identifier.CaseSensitivity.INSENSITIVE),
                            identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                        )
                    ),
                )
            ),
            SuccessTestCase(
                "DROP TABLE with qualified name with mixed case sensitivity",
                "DROP TABLE myCatalog.\"mySchema\".foo",
                statementDDLDropTable(
                    identifierQualified(
                        identifierSymbol("myCatalog", Identifier.CaseSensitivity.INSENSITIVE),
                        listOf(
                            identifierSymbol("mySchema", Identifier.CaseSensitivity.SENSITIVE),
                            identifierSymbol("foo", Identifier.CaseSensitivity.INSENSITIVE),
                        )
                    ),
                )
            ),
        )

        override fun provideArguments(context: ExtensionContext?): Stream<out Arguments> =
            (createTableTests + dropTableTests).map { Arguments.of(it) }.stream()
    }

    private fun assertExpression(input: String, expected: AstNode) {
        val result = parser.parse(input)
        val actual = result.root
        assertEquals(expected, actual)
    }
}
