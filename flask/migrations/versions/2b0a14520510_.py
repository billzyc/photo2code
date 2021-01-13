"""empty message

Revision ID: 2b0a14520510
Revises: 1e8a9b118c49
Create Date: 2021-01-06 22:49:34.132758

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2b0a14520510'
down_revision = '1e8a9b118c49'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('code_file', sa.Column('extension', sa.String(length=50), nullable=False))
    op.drop_column('code_file', 'language')


def downgrade():
    op.add_column('code_file', sa.Column('language', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.drop_column('code_file', 'extension')
