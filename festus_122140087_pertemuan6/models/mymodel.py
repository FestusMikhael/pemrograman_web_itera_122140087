from sqlalchemy import (
    Column,
    Index,
    Integer,
    String,
    Text,
)

from .meta import Base


class MyModel(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)

    # Menambahkan index pada 'name' di MyModel
    __table_args__ = (
        Index('my_index', 'name', unique=True),  # Tidak perlu mysql_length jika bukan MySQL
    )
